// Code generated by github.com/99designs/gqlgen, DO NOT EDIT.

package model

import (
	"fmt"
	"io"
	"strconv"
)

type Book struct {
	ID     string  `json:"id"`
	URL    string  `json:"url"`
	Year   int     `json:"year"`
	Review *string `json:"review"`
	Level  Level   `json:"level"`
	User   *User   `json:"user"`
}

type NewBook struct {
	URL    string  `json:"url"`
	Year   int     `json:"year"`
	Review *string `json:"review"`
	Level  Level   `json:"level"`
	UserID string  `json:"userId"`
}

type NewUser struct {
	Name string `json:"name"`
}

type User struct {
	ID   string `json:"id"`
	Name string `json:"name"`
}

type Level string

const (
	LevelBeginner     Level = "BEGINNER"
	LevelIntermediate Level = "INTERMEDIATE"
	LevelExpert       Level = "EXPERT"
)

var AllLevel = []Level{
	LevelBeginner,
	LevelIntermediate,
	LevelExpert,
}

func (e Level) IsValid() bool {
	switch e {
	case LevelBeginner, LevelIntermediate, LevelExpert:
		return true
	}
	return false
}

func (e Level) String() string {
	return string(e)
}

func (e *Level) UnmarshalGQL(v interface{}) error {
	str, ok := v.(string)
	if !ok {
		return fmt.Errorf("enums must be strings")
	}

	*e = Level(str)
	if !e.IsValid() {
		return fmt.Errorf("%s is not a valid Level", str)
	}
	return nil
}

func (e Level) MarshalGQL(w io.Writer) {
	fmt.Fprint(w, strconv.Quote(e.String()))
}
