import ListItem from "./ListItem"

const List = ({users}: { users: Array<{ id : string, first_name : string, email: string, avatar: string }> }) => {
    
    return (
      <>
        {users.map((user) => {
          return <ListItem key={user.id} user={user}/>
        })}
      </>
    );
  };

export default List