const ButtonGallery = () => {
    return <button>Click Gallery Button!</button>;
};

export default ButtonGallery;  // Default export

export const Gallerys = () => {
    return (
        <section>
            <h1>Amazing Gallery</h1>
            <ButtonGallery />
        </section>
    );
};