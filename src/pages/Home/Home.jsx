import css from '../Home/Home.module.css';
import { useNavigate } from 'react-router-dom';
import Btn from 'components/Btn/Btn';
export default function Home() {
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    navigate('/tweets', { replace: true });
  };

  return (
    <div className={css.container}>
      <div>
        <form onSubmit={handleSubmit}>
          <h2>You must be logged in</h2>
          <input />
          <input />
          <Btn text="Login" type="submit" />
          <p> Type any characters and press the button</p>
        </form>
      </div>
    </div>
  );
}
