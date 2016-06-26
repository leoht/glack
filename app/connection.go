package main

import (
    "github.com/gorilla/websocket"
    "fmt"
)

type Connection struct {
    ws *websocket.Conn
    send chan []byte
}

func (c* Connection) Read() {
    for {
        t, body, err := c.ws.ReadMessage()

        if err != nil {
            break
        }

        fmt.Println("Read message: " + string(body))

        msg := NewMessageFromJson(string(body))
        
        if msg != nil {
            c.Write(t, body)
        }
    }
}

func (c* Connection) Write(msgType int, msg []byte) error {
    return c.ws.WriteMessage(msgType, msg)
}
