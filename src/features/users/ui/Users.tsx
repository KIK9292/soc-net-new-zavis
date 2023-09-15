import React, { useEffect, useState } from "react"
import { useAppSelector } from "common/hook/useAppSelector"
import { User } from "common/types/apiTypes"
import { Avatar, Button, Card, Pagination, PaginationProps } from "antd"
import Meta from "antd/es/card/Meta"
import { userThunk } from "features/users/model/users.slice"
import { useActions } from "common/hook/useActions"

export const Users = () => {
  let users = useAppSelector<User[]>((state) => state.users.users)
  let totalCount = useAppSelector<number>((state) => state.users.totalCount)
  const { setUsers, followUser, unFollowUser } = useActions(userThunk)
  const [paramPagination, setParamPagination] = useState<{
    count?: number
    page?: number
  }>({
    count: 10,
    page: 1,
  })

  useEffect(() => {
    setUsers(paramPagination)
  }, [paramPagination])
  const onFollowed = (id: number, followed: boolean) => {
    if (followed) {
      unFollowUser(id)
    } else {
      followUser(id)
    }
  }
  const onChange = (pageNumber: number, size: number) => {
    setParamPagination({ count: size, page: pageNumber })
  }
  const onShowSizeChange = (page: number, size: number) => {
    setParamPagination({ count: size, page: page })
  }
  return (
    <div>
      <Pagination
        showQuickJumper
        showSizeChanger={true}
        defaultPageSize={10}
        total={totalCount}
        onChange={onChange}
        onShowSizeChange={onShowSizeChange}
        pageSizeOptions={[10, 20, 30, 40, 50]}
      />
      {users.map((el) => {
        const avatar = !(el.photos.large || el.photos.small) ? (
          <Avatar
            style={{ borderRadius: 0, width: 300, height: "auto" }}
            src="https://xsgames.co/randomusers/avatar.php?g=pixel"
          />
        ) : (
          <img src={`${el.photos.large ? el.photos.large : el.photos.small}`} alt={"avatar"} />
        )

        return (
          <Card
            key={el.id}
            style={{ width: 300 }}
            cover={avatar}
            actions={[
              <Button type="primary" onClick={() => onFollowed(el.id, el.followed)}>
                {el.followed ? "Unfollowed" : "Followed"}
              </Button>,
            ]}
          >
            <Meta title={el.name} description={el.status} />
          </Card>
        )
      })}
    </div>
  )
}
