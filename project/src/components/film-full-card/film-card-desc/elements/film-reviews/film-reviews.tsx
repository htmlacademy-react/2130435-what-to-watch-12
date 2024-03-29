import {Reviews} from '../../../../../types/reviews';
import FilmPost from './elements/film-post/film-post';
import {useAppSelector} from '../../../../../hooks/use-app-selector';
import {getReviewsFilm} from '../../../../../store/reviews/selectors/get-reviews-film/get-reviews-film';

const FilmReviews = () => {
  const posts = useAppSelector(getReviewsFilm);

  const renderPost = (post: Reviews) => (
    <FilmPost
      comment={post.comment}
      date={post.date}
      id={post.id}
      rating={post.rating}
      user={post.user}
      key={post.id}
    />
  );

  const renderColumnComments = (postCount: number) => {
    switch (postCount) {
      case 0:
        return <p className="film-card__details-value">Your review will be the first</p>;
      case 1:
        return (
          <div className="film-card__reviews-col">
            {posts.map(renderPost)}
          </div>
        );
      default:
        return (
          <>
            <div className="film-card__reviews-col">
              {posts.slice(0, Math.ceil(postCount / 2)).map(renderPost)}
            </div>
            <div className="film-card__reviews-col">
              {posts.slice(Math.ceil(postCount / 2)).map(renderPost)}
            </div>
          </>
        );
    }
  };

  return (
    <div className="film-card__reviews film-card__row">
      {renderColumnComments(posts.length)}
    </div>
  );
};

export default FilmReviews;
