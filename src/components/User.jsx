function User({user}) {
    console.log(user.name)
    
    return (
        <span className="user">
            <span className="name">{user.name}</span>
            <span className="handle">{user.handle}</span>
          </span>
    )
}

export default User;