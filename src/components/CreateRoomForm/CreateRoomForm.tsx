import { useState, FormEvent } from "react";
import axios from "src/utils/http/axios";
// import { useNavigate } from "react-router-dom";

export default function CreateRoomForm() {
  const [guestCanPause, setGuestCanPause] = useState(false);
  const [skipVotesCount, setSkipVotesCount] = useState(0);

  // const navigate = useNavigate();

  const createRoomInstance = async () => {
    const data = {
      guest_can_pause: guestCanPause,
      votes_to_skip: skipVotesCount,
    };

    try {
      const response = await axios.post("create-room", data);
      if (!response) {
        throw new Error("error request");
      }

      return response.data;
    } catch (err) {
      console.log(err);
    }
  };

  const getRoom = async (roomCode: string) => {
    try {
      const response = axios.get(`/get-room?code=${roomCode}`);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const room = await createRoomInstance();
    await getRoom(room.code);
  };

  return (
    <div>
      <h3>Create Room</h3>
      <div>
        <form onSubmit={handleSubmitForm}>
          <label>
            <input
              type="checkbox"
              checked={guestCanPause}
              onChange={(e) => setGuestCanPause(e.target.checked)}
            />
            Guests can pause?
          </label>
          <input
            type="number"
            value={skipVotesCount}
            onChange={(e) => setSkipVotesCount(parseInt(e.target.value))}
          />
          <button type="submit">Criar</button>
        </form>
      </div>
    </div>
  );
}
