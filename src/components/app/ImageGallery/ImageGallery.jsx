import { Component } from "react";
import PropTypes from 'prop-types';
import { ImageGalleryitems } from "../ImageGalleryItem/ImageGalleryItem";
import Modal from '../Modal/Modal';
import { LoadMore } from "../Button/Button";
import { Spinner } from "../Loader/Loader";
import css from './ImageGallery.module.css';
import { toast } from 'react-toastify';

export default class ImageGallery extends Component {

    state = {
        searchName: "",
        page: 1,
        showModal: false,
        largeImageURL: "",
        status: "idle"
    }
    

    toggleModal = (e) => {
        
        if (this.state.showModal === false) { 
            const LargeImg = e.currentTarget.id
            this.setState(state => ({
                largeImageURL: LargeImg,
        }))
        }

        this.setState(state => ({
            showModal: !state.showModal,
        }))
        
    }

    loadMore = () => { 
        this.setState(prevState => ({
            page: prevState.page + 1,
        }))
    }

    componentDidUpdate(prevProps, prevState) { 
    
        const prevName = prevProps.imgName;
        const nextName = this.props.imgName;
        
        const options = {
            key: '30076608-453b15a34a4d23543af1b2a78',
            q: nextName,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: "true",
            per_page: "12",
        }

        if (prevName !== nextName) { 

            this.setState({ searchName: "", page: 1, status: "pending"} ) ;
            
            fetch(`https://pixabay.com/api/?key=${options.key}&q=${options.q}&image_type=${options.image_type}&orientation=${options.orientation}&safesearch=${options.safesearch}&page=1&per_page=${options.per_page}`)
            .then(response => response.json())
            // .then(searchName => this.setState({searchName: searchName.hits, status: "resolved"}))
                .then(searchName => {
                    if (searchName.total !== 0) {
                        toast.success(`По вашему запросу найдено ${searchName.total} фотографий`);
                        this.setState({ searchName: searchName.hits, status: "resolved" })
                    }
                    else {
                        toast.error("Введите корректное имя запроса");
                        this.setState({ status: "rejected" })
                    }
                })

        }

        if (this.state.page > prevState.page) { 
            
            fetch(`https://pixabay.com/api/?key=${options.key}&q=${options.q}&image_type=${options.image_type}&orientation=${options.orientation}&safesearch=${options.safesearch}&page=${this.state.page}&per_page=${options.per_page}`)
            .then(response => response.json())
            .then(searchName => this.setState({searchName: [...prevState.searchName, ...searchName.hits], status: "resolved"}))
        }
    }

    render() { 
        const { searchName, status } = this.state;

        if (status === "pending" ) { 
            return (
                <Spinner />
            )
        }
        if (status === "resolved") { 
            return (
                <>
                    <ul className={css.ImageGallery}>{searchName.map(({ webformatURL, id, tags, largeImageURL }) =>
                        (<ImageGalleryitems key={id} webformatURL={webformatURL} tags={tags} largeImageURL={largeImageURL} onToggle={this.toggleModal} />))}
                    </ul>
                    <LoadMore onClick={this.loadMore} />
                    {this.state.showModal && <Modal largeImg={this.state.largeImageURL} onToggle={this.toggleModal} />}
                </>)
                
        }
    }
}

ImageGallery.propTypes = {
    imgName: PropTypes.string,
    
};