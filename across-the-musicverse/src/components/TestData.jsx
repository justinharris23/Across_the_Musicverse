

const [track, setTrack] = useState(null)
useEffect(() => {
 console.log(chart);
 const getTrack = async () => {
  const response = await axios.get(`https://api.deezer.com/album/${album.id}/tracks`)
  setTrack(response.data.tracks.data)

 }
 getTrack();
  }, []);