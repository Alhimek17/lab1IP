package ru.ulstu.is.server.api;

public class GroupDto {
    private final int id;
    private final String name;

    public GroupDto(Integer id, String name) {
        this.id = id;
        this.name = name;
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

}
