import SecondaryButton from "../../../components/SecondaryBtn/SecondaryBtn";

const Documents = ({ docs }) => {
    console.log(docs);
    return (
        <>
            {
                docs.length == 0
                    ?
                    <>
                        <p>Your file’s record is empty</p>
                        <SecondaryButton>See more</SecondaryButton>
                    </>
                    :
                    docs.map((doc)=> {
                        return <div key={doc.id} id={doc.id}>
                            <p>{doc.name}</p>
                            <p>{doc.category}</p>
                            <p>{doc.date}</p>
                        </div>
                    })
            }
        </>
    );
};

export default Documents;