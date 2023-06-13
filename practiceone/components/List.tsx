import ListItem from "./ListItem"

const List = ({users}: { users: Array<{ id: string }> }) => {
    
    return (
      <>
        {users.map((user) => {
          return <ListItem key={user.id}>{user.id}</ListItem>;
        })}
      </>
    );
  };

export default List