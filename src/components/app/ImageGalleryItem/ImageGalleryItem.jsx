import PropTypes from 'prop-types';
import css from './ImageGalleryitems.module.css'


export const ImageGalleryitems = ({ webformatURL, tags, onToggle, largeImageURL}) => {
    return (
        <li className={css.ImageGalleryItem} >
            <img src={webformatURL} alt={tags} id={largeImageURL} onClick={onToggle} className={css.ImageGalleryItemImage} />
        </li>)
}

ImageGalleryitems.propTypes = {
    webformatURL: PropTypes.string,
    tags: PropTypes.string,
    largeImageURL: PropTypes.string,
    onToggle: PropTypes.func
};