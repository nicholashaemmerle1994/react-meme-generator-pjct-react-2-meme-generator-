// import axios from 'axios';

// const MemeChoices = () => {
//   const [memes, setMemes] = useState([]);
//   useEffect(() => {
//     axios
//       .get('https://api.memegen.link/templates')
//       .then((response) => setMemes(response.data))
//       .catch((error) => console.log(error));
//   }, []);

// //   return (
//     <div className="flexbox item item2">
//       <select className="item3">
//         {memes.map((meme) => (
//           <option key={meme.id} value={meme.id}>
//             {meme.id}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// };
// export default MemeChoices;
