import { useSelector } from 'react-redux';

export default function SubmitHighscoreModal() {
  const time = useSelector((state) => state.time.time);
  console.log(time);
  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };
  return (
    <div className="flex items-center justify-center">
      <div className="font-bold rounded-lg m-36 text-center">
        <form onSubmit={handleSubmit}>
          <label htmlFor="nickName">Nickname:</label>
          <input type="text" name="nickName" required></input>
          <p className=" text-3xl">{time}</p>
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    </div>
  );
}
