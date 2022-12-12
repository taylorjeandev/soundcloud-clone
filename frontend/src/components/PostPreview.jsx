export default function PostPreview({ _id, image, caption }) {
  <li className="col-6 justify-content-between mt-5">
    <a href={`post/${_id}`}>
      <img className="img-fluid" src={image} alt={caption} />
    </a>
  </li>;
}
