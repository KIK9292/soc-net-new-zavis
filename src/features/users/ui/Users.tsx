import React, { useEffect } from "react"
import { useAppSelector } from "common/hook/useAppSelector"
import { User } from "common/types/apiTypes"
import { Avatar, Button, Card } from "antd"
import Meta from "antd/es/card/Meta"
import { useAppDispatch } from "common/hook/useAppDispatch"
import { userThunk } from "features/users/model/users.slice"
import { useActions } from "common/hook/useActions"

export const Users = () => {
  let users = useAppSelector<User[]>((state) => state.users.users)
  const { setUsers, followUser, unFollowUser } = useActions(userThunk)
  useEffect(() => {
    setUsers({})
  }, [])

  const onFollowed = (id: number, followed: boolean) => {
    if (followed) {
      unFollowUser(id)
    } else {
      followUser(id)
    }
  }
  return (
    <div>
      {users.map((el) => {
        return (
          <Card
            key={el.id}
            style={{ width: 300 }}
            cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
            actions={[
              <Button type="primary" onClick={() => onFollowed(el.id, el.followed)}>
                {el.followed ? "Unfollowed" : "Followed"}
              </Button>,
            ]}
          >
            <Meta
              avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
              title={el.name}
              description={el.status}
            />
          </Card>
        )
      })}
    </div>
  )
}

export default Users
