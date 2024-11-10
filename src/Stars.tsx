import Star from './Star';

type Stars = {
  count: number
};

const Stars = ({ count = 0 }: Stars) => {
  let stars: React.ReactElement[];

  if (count < 1 || count > 5 || typeof(count) !== 'number') {
    stars = [];
  } else {
    stars = Array(count).fill(null).map((_, i) => <Star key={i} />);
  }

  return (
    <>{stars.length ? <ul className="card-body-stars" >{stars.map((star) => star)}</ul> : null}</>
  );
}

export default Stars;