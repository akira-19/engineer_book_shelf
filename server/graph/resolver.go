package graph

import (
	"database/sql"
	"fmt"
	"time"

	"github.com/akira-19/engineer_book_shelf/graph/model"
	_ "github.com/lib/pq"
)

// This file will not be regenerated automatically.
//
// It serves as dependency injection for your app, add any dependencies you require here.

type Resolver struct{
	DB *sql.DB
}

// func (r *Resolver) createUser(input *model.NewUser) (*model.User, error) {
// 	cmd := "INSERT INTO users (name) VALUES ($1)"
// 	_, err := r.DB.Exec(cmd, input.name)
// 	if err != nil {
// 		fmt.Println(err)
// 	}
// }

func (r *Resolver) createUser(name string) (*model.User, error){
	cmd := "INSERT INTO users (name, created_at, updated_at) VALUES ($1, $2, $3)"
	_, err := r.DB.Exec(cmd, name, time.Now(), time.Now())
	if err != nil {
		fmt.Println(err)
	}

	var user model.User = model.User{
    Name: name,
	}
	
	return &user, nil
}
