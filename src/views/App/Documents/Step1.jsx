import DragDropSpace from "./DragDropSpace";

const Step1 = () => {
    return (
        <DragDropSpace
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => console.log("dropped")}
        />
    );
};

export default Step1;