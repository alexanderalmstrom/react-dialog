import { Dialog } from "./dialog/Dialog";
import DialogContent from "./dialog/DialogContent";
import DialogTrigger from "./dialog/DialogTrigger";

function App() {
  return (
    <>
      <Dialog>
        <DialogTrigger>Open dialog</DialogTrigger>
        <DialogContent>
          <h1>Dialog Title</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit
            maxime debitis quis atque corporis vero asperiores architecto!
            Consectetur minima excepturi ex vero, fugiat ducimus. Nostrum atque
            consequatur voluptatum sapiente omnis!
          </p>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default App;
