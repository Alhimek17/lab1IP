package ru.ulstu.is.server.api;

import java.util.Date;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import ru.ulstu.is.server.configuration.Constants;

@RestController
@RequestMapping(Constants.API_URL + ExampleController.URL)
public class ExampleController {
    public static final String URL = "/example";
    private final Logger log = LoggerFactory.getLogger(ExampleController.class);

    @GetMapping
    public String getWithRequestParam(@RequestParam(defaultValue = "World") String name) {
        log.debug("getWithRequestParam name = {}", name);
        return String.format("Hello, %s", name);
    }

    @GetMapping("/{id}")
    public Integer getWithPathVariable(@PathVariable Integer id) {
        log.debug("getWithPathVariable id = {}", id);
        return id;
    }

    @GetMapping("/test")
    public String getTest() {
        log.debug("getTest");
        return new Date().toString();
    }

    @GetMapping("/num")
    public Integer getNum() {
        log.debug("getNum");
        return 10;
    }

    @GetMapping("/list")
    public List<Integer> getList() {
        log.debug("getList");
        return List.of(10, 20, 30, 40, 50);
    }

    @GetMapping("/map")
    public Map<String, String> getMap() {
        log.debug("getMap");
        return Map.of("firstName", "Ivan", "lastName", "Ivanov");
    }

    @PostMapping
    public Map<String, String> postWithRequestBody(@RequestBody Map<String, String> data) {
        log.debug("postWithRequestBody data = {}", data);
        return data;
    }
}
