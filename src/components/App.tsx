import ExpandableText from "./ExpandableText";

function App() {
  return (
    <>
      <div className="flex items-center text-gray-200 flex-col justify-center">
        <h1 className="text-9xl font-bold underline">Hello world!</h1>
        <div className="mt-24">
          <ExpandableText maxCharacters={20}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
            eaque ut. Explicabo eveniet aperiam corrupti, repellendus laborum
            minus alias repudiandae. Voluptatem ut rerum accusamus voluptates
            perferendis. Nesciunt, impedit? Inventore voluptates cumque
            repudiandae eos quis, distinctio animi! Aspernatur, architecto
            explicabo asperiores omnis dolor blanditiis eius sapiente nobis
            itaque voluptates natus, a eligendi nesciunt tempora temporibus
            beatae consequatur ipsa quod totam dignissimos minima, veniam sequi?
            Fugiat quidem libero unde corrupti aperiam accusamus, quibusdam
            alias necessitatibus porro, impedit, pariatur minima dolores in
            aliquid quam possimus tenetur itaque saepe dignissimos. Voluptates
            assumenda cum harum voluptate praesentium eligendi eveniet debitis
            ipsa quo nam, facere adipisci.
          </ExpandableText>
        </div>
      </div>
    </>
  );
}

export default App;
