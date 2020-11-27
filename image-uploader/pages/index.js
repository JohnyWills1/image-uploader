import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import { useRef } from 'react';

export default function Home() {
	const fileUploader = useRef(null);
	const dropArea = useRef(null);

	const openFileUpload = () => {
		fileUploader.current.click();
	};

	const dropHandler = (e) => {
		console.log('Drop Handler Called');

		e.preventDefault();

		if (e.dataTransfer.items) {
			// Use DataTransferItemList interface to access the file(s)
			for (var i = 0; i < e.dataTransfer.items.length; i++) {
				// If dropped items aren't files, reject them
				if (e.dataTransfer.items[i].kind === 'file') {
					var file = e.dataTransfer.items[i].getAsFile();
					console.log(file);
				}
			}
		} else {
			// Use DataTransfer interface to access the file(s)
			for (var i = 0; i < e.dataTransfer.files.length; i++) {
				console.log('... file[' + i + '].name = ' + e.dataTransfer.files[i].name);
			}
		}
	};

	const dragOverHandler = (e) => {
		console.log('File(s) in drop zone');

		// Prevent default behavior (Prevent file from being opened)
		e.preventDefault();
	};

	return (
		<div className={styles.container}>
			<Head>
				<title>Image Uploader</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className={styles.main}>
				<h2 className={styles.uploadTitle}>Upload your image</h2>
				<p className={styles.uploadDesc}>File should be '.jpeg' or '.png'...</p>
				<div
					ref={dropArea}
					className={styles.imageUploadSection}
					onDragEnter={() => (dropArea.current.style.background = '#bdbec0')}
					onDragLeave={() => (dropArea.current.style.background = '#F6F8FB')}
					onDragOver={(e) => dragOverHandler(e)}
					onDrop={(e) => dropHandler(e)}
				>
					<Image src='/image.svg' height='88px' width='114px' />
					<p className={styles.imageUploadText}>Drag & Drop your image here</p>
				</div>
				<p className={styles.or}>Or</p>
				<input
					type='file'
					ref={fileUploader}
					style={{ display: 'none' }}
					accept='jpeg, png'
					onChange={(e) => console.log(e.target.files)}
				/>
				<button className={styles.fileButton} onClick={openFileUpload}>
					Choose a file
				</button>
			</main>
		</div>
	);
}
