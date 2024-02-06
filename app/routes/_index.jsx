import { useLoaderData } from '@remix-run/react'
import { getGuitarras } from '~/models/guitarras.server'
import { getPosts } from '~/models/posts.server'
import { getCurso } from '~/models/curso.server'
import ListadoGuitarras from '~/components/listado-guitarras';
import ListadoPosts from '~/components/listado-posts';
import Curso from '~/components/curso';
import sytlesGuitarras from '~/styles/guitarras.css'
import sytlesPosts from '~/styles/blog.css'
import sytlesCurso from '~/styles/curso.css'

export function meta() {

}
export function links() {
    return [
        {
            rel: 'stylesheet',
            href: sytlesGuitarras
        },
        {
            rel: 'stylesheet',
            href: sytlesPosts
        },
        {
            rel: 'stylesheet',
            href: sytlesCurso
        },
    ]
}
export async function loader() {

    const [guitarras, posts, curso] = await Promise.all([
        getGuitarras(),
        getPosts(),
        getCurso()
    ])

    console.log(curso);

    return {
        guitarras: guitarras.data,
        posts: posts.data,
        curso: curso.data,
    }
}

function Index() {

    const { guitarras, posts, curso } = useLoaderData();

    return (
        <>
            <main className='contenedor'>
                <ListadoGuitarras 
                    guitarras={guitarras}
                />
            </main>

            <Curso 
                curso={curso?.attributes}
            />

            <section className='contenedor'>
                <ListadoPosts 
                    posts={posts}
                />
            </section>
        </>
    )
}

export default Index