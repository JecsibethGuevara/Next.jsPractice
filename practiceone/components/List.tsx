import ListItem from "./ListItem"

const List = ({users}: { users: Array<{ id: string , first_name: string}> }) => {
    
    return (
      <>
        {users.map((user) => {
          return <ListItem key={user.id} id={user.id} first_name={user.first_name}/>
        })}
      </>
    );
  };

export default List