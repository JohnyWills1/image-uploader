import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import { useRef } from 'react';

export default function Home() {
	const fileUploader = useRef(null);

	const openFileUpload = () => {
		fileUploader.current.click();
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
					className={styles.imageUploadSection}
					onDragEnter={() => console.log('Drag Enter')}
					onDragLeave={() => console.log('Drag Leave')}
					onDragOver={() => console.log('Drag Over')}
					onDrop={() => console.log('Drop')}
				>
					<Image src='/image.svg' height='88px' width='114px' />
					<p className={styles.imageUploadText}>Drag & Drop your image here</p>
				</div>
				<p className={styles.or}>Or</p>
				<input
					type='file'
					ref={fileUploader}
					style={{ display: 'none' }}
					onChange={(e) => console.log(e.target.files)}
				/>
				<button className={styles.fileButton} onClick={openFileUpload}>
					Choose a file
				</button>
			</main>
		</div>
	);
}
