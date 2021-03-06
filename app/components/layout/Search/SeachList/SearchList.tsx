import { IMovie } from '@/shared/types/movie.types'
import { getMovieUrl } from 'config/url.config'
import Link from 'next/link'
import React, { FC } from 'react'
import styles from './SearchList.module.scss'
import Image from 'next/image'
const SearchList : FC<{movies:IMovie[]}> = ({movies}) => {
  return (
    <div className={styles.list}>
        {movies.length ? movies.map(movie=>(
            <Link key={movie._id} href={getMovieUrl(movie.slug)}>
            <a>
            <Image
								src={movie.poster || ''}
								width={50}
								height={50}
								objectFit="cover"
								objectPosition="top"
								alt={movie.title}
								draggable={false}
							/>
                <span>{movie.title}</span>
            </a>
            </Link>
        )) : <div className='text-white text-center my-4'>Фильмы не найдены</div>
        }
    </div>
  )
}

export default SearchList