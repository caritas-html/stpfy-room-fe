import { useState, FormEvent } from "react";
import axios from "src/utils/http/axios"

export default function CreateRoomForm() {
  const [guestCanPause, setGuestCanPause] = useState(false);
  const [skipVotesCount, setSkipVotesCount] = useState(0);

  const createRoomInstance = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      guest_can_pause: guestCanPause,
      votes_to_skip: skipVotesCount,
    };

    try {
        const response = await axios.post("create-room", data)
        if (!response) {
            throw new Error("error request")
        }

        return response.data;
    } catch (err) {
        console.log(err)
    }
  };

  return (
    <div>
      <h3>Create Room</h3>
      <div>
        <form onSubmit={createRoomInstance}>
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
