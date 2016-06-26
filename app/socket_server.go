package main

import (
    "net/http"
    "github.com/gorilla/websocket"
)

type SocketServer struct {
    connections map[*Connection]bool
    register chan *Connection
    upgrader websocket.Upgrader
}

var socketServer = SocketServer{
    connections: make(map[*Connection]bool),
    register: make(chan *Connection),
    upgrader: websocket.Upgrader{
        ReadBufferSize:  1024,
        WriteBufferSize: 1024,
    },
}

func (s *SocketServer) Run() {
    for {
        select {
            case conn := <- s.register:
                s.connections[conn] = true
        }
    }
}

func (s* SocketServer) Handler(w http.ResponseWriter, r *http.Request) {
    c, _ := s.upgrader.Upgrade(w, r, nil)

    conn := Connection{
        ws: c,
    }

    s.register <- &conn

    go conn.Read()
}
