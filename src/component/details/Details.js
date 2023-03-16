import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { AiOutlineSetting } from 'react-icons/ai';
import { TfiArrowCircleRight } from 'react-icons/tfi';
import { BiLeftArrow } from 'react-icons/bi';
import './Details.css';
import { baseURL } from '../../helpers/api';

const Details = () => {
  const { id } = useParams();

  const [bookDetails, setBookDetails] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await axios.get(`${baseURL}/books/${id}`);
        setBookDetails(response.data);
        return response;
      } catch (error) {
        return error;
      }
    };

    fetchBookDetails();
  }, [id]);

  const navigateHome = () => {
    navigate('/');
  };

  return (
    <section>
      {bookDetails && (
        <div key={bookDetails.id} className="single-book">
          <div className="books-image">
            {bookDetails.book_cover_images && (
              <img
                src={
                  bookDetails.book_cover_images[
                    Object.keys(bookDetails.book_cover_images)[0]
                  ]
                }
                alt={bookDetails.title}
              />
            )}

            <div className="configure">
              <button type="button" onClick={navigateHome}>
                <BiLeftArrow />
              </button>
            </div>
          </div>
          <div className="book-props">
            <div className="books-name">
              <h3 className="bookTitle">
                {' '}
                Book Title:
                {bookDetails.title}
              </h3>
              <span>
                <i>
                  $-
                  {bookDetails.price}
                  {' '}
                  Enough to reserve
                </i>
              </span>
            </div>
            <div className="books-genre">
              <span>
                Genre:
                {bookDetails.genre}
              </span>
            </div>
            <div className="books-type">
              <span>
                Language:
                {bookDetails.language}
              </span>
            </div>
            <div className="books-cost">
              <span>
                Price:
                {bookDetails.price}
              </span>
            </div>
            <div className="books-pages">
              <span>
                Pages:
                {bookDetails.pages}
              </span>
            </div>
            <div className="books-color">
              <span>
                Isbn:
                {bookDetails.isbn}
              </span>
            </div>
            <Link
              to={`/reservations/new/${bookDetails.id}`}
              className="configure"
            >
              <button type="button">
                <AiOutlineSetting />
                <span>Reserve</span>
                <TfiArrowCircleRight />
              </button>
            </Link>
          </div>
        </div>
      )}
    </section>
  );
};

export default Details;
