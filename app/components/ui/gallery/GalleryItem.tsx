import cn from 'classnames'
import Link from 'next/link'
import { FC, useEffect, useState } from 'react'
import styles from './Gallery.module.scss'
import { IGalleryItemProps } from './gallery.interface'
import Image from 'next/image'
import noneImg from '../../../assets/images/none.jpg'

const GalleryItem: FC<IGalleryItemProps> = ({ item, variant }) => {
	// let isLoaded=false
	// const [image,setImage]=useState('')
	// useEffect(()=>{
	// 	isLoaded=true
	// 	const path=(API_SERVER_FILES+item.posterPath)
	// 	console.log(path)
	// 	setImage(path)
	// },[])
	return (
		<Link href={item.url}>
			<a
				className={cn(styles.item, {
					[styles.withText]: item.content,
					[styles.horizontal]: variant === 'horizontal',
					[styles.vertical]: variant === 'vertical',
				})}
			>
				<div className='block'>
					
					<Image
					alt={item.name}
					src={item.posterPath || noneImg}
					// width={250}
				    // height={250}
					draggable={false}
					layout='fill'
					objectFit='fill'
					priority
					/> 
					
				
				{item.content && (
					<div className={styles.content}>
						{item.content.subTitle && (
							<div className={styles.subTitle}> {item.content.subTitle}</div>
						)}
						<div className={styles.title}>{item.content.title}</div>
					</div>
				)}
				</div>
			</a>
		</Link>
	)
}

export default GalleryItem
