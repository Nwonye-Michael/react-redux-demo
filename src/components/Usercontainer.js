// import React, { useEffect } from "react"
// import { fetchUsers } from "./user/UserActions"
// import { connect } from "react-redux"

// function Usercontainer({ userData, fetchUsers }) {
//   useEffect(() => {
//     fetchUsers()
//   }, [])

//   return userData.loading ? (
//     <h2>Loading</h2>
//   ) : userData.error ? (
//     <h2>{userData.error}</h2>
//   ) : (
//     <div>
//       <h2>User List</h2>
//       <div>{userData && userData.users.map((user) => <p>{user.name}</p>)}</div>
//     </div>
//   )
// }

// const mapStateToProps = (state) => {
//   return {
//     userData: state.user,
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchUsers: () => dispatch(fetchUsers()),
//   }
// }

// export default connect(mapDispatchToProps, mapStateToProps)(Usercontainer)

import React, { useEffect } from "react"
import { fetchUsers } from "./user/UserActions"
import { useDispatch, useSelector } from "react-redux"

function Usercontainer() {
  const userData = useSelector((state) => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  return (
    <div>
      <form>
        <button>Reload</button>
      </form>

      {userData.loading ? (
        <div>Loading</div>
      ) : userData.error ? (
        <div>{userData.error}</div>
      ) : (
        userData && (
          <div>
            <h2>Users</h2>

            {userData.users.map((user, index) => (
              <p key={index}>{user.name}</p>
            ))}
          </div>
        )
      )}
    </div>
  )
}

export default Usercontainer
