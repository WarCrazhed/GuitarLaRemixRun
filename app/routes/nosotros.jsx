import imagen from '../../public/img/nosotros.jpg'
import styles from '~/styles/nosotros.css'

export function meta() {
    return [
        {
            title: 'GuitarLA - Sobre Nosotros',
            description: 'Venta de guitarras, blog de música'
        }
    ]
}

export function links() {
    return [
        {
            rel: 'stylesheet',
            href: styles
        },
        {
            rel: 'preload',
            href: imagen,
            as: 'image'
        }
    ]
}

function Nosotros() {
    return (
        <main className="contenedor nosotros">
            <h2 className="heading">Nosotros</h2>
            <div className="contenido">
                <img src={imagen} alt="Imagen sobre nosotros" />
                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias atque explicabo ratione dignissimos quod tempora eaque est molestiae sequi! Sunt atque perspiciatis maxime eum voluptatum dolorem aperiam accusantium nam! Odit.
                    Ipsam sequi numquam, natus voluptatum eligendi consectetur adipisci eius illum obcaecati accusantium enim ea illo minima eveniet nisi consequatur commodi, dolores laudantium ut dolorem quidem? Cumque dolores eum alias possimus.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus blanditiis architecto nulla, esse rem nisi sint sunt eius veritatis magni natus repudiandae et quos harum repellat ipsam, ipsum asperiores explicabo?
                    Nisi laboriosam totam accusamus illum voluptates velit adipisci odit. Dolore tempora neque cum, omnis error qui esse, illum rerum odio doloribus et temporibus totam! Delectus praesentium necessitatibus quo officiis impedit!</p>
                </div>
            </div>
        </main>
    )
}

export default Nosotros