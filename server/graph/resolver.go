package graph

import (
	"database/sql"
	"log"
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

func (r *Resolver) createUser(name string) (*model.User, error){
	cmd := "INSERT INTO users (name, created_at, updated_at) VALUES ($1, $2, $3)"
	_, err := r.DB.Exec(cmd, name, time.Now(), time.Now())
	if err != nil {
		log.Fatal(err)
	}

	var user model.User = model.User{
		Name: name,
	}

	return &user, nil
}

func (r *Resolver) addBook(input model.NewBook) (*model.Book, error){
	cmd := "INSERT INTO books (url, year, review, level, user_id, created_at, updated_at) VALUES ($1, $2, $3, $4, $5, $6, $7)"
	_, err := r.DB.Exec(cmd, 
		input.URL, 
		input.Year, 
		input.Review, 
		input.Level, 
		input.UserID, 
		time.Now(), 
		time.Now())

	if err != nil {
		log.Fatal(err)
	}

	var user model.User = model.User{
		Name: "name",
	}

	var book model.Book = model.Book{
		URL:	input.URL,
		Year:	input.Year,
		Review:	input.Review,
		Level:	input.Level,
		User: 	&user,
	}

	return &book, nil
}
