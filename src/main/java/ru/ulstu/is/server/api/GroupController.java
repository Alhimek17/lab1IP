package ru.ulstu.is.server.api;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ru.ulstu.is.server.configuration.Constants;

@RestController
@RequestMapping(Constants.API_URL + GroupController.URL)
public class GroupController {
    public static final String URL = "/group";
    private final List<GroupDto> groups;

    public GroupController() {
        this.groups = List.of(
                new GroupDto(1, "ПИбд-31"),
                new GroupDto(2, "ПИбд-32"),
                new GroupDto(3, "ПИбд-33"));
    }

    @GetMapping
    public List<GroupDto> getAll() {
        return groups;
    }

    @GetMapping("/{id}")
    public GroupDto get(@PathVariable int id) {
        return groups.stream()
                .filter(group -> group.getId() == id)
                .findAny()
                .orElseThrow(() -> new NotFoundException(GroupDto.class, id));
    }

}
