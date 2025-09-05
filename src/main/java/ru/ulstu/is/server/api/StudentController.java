package ru.ulstu.is.server.api;

import java.util.List;
import java.util.concurrent.ConcurrentLinkedQueue;
import java.util.concurrent.atomic.AtomicInteger;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ru.ulstu.is.server.configuration.Constants;

@RestController
@RequestMapping(Constants.API_URL + StudentController.URL)
public class StudentController {
    public static final String URL = "/student";
    private final Logger log = LoggerFactory.getLogger(StudentController.class);
    private final AtomicInteger idGenerator = new AtomicInteger();
    private final ConcurrentLinkedQueue<StudentDto> students;
    private final GroupController groupController;

    public StudentController(GroupController groupController) {
        this.groupController = groupController;
        this.students = new ConcurrentLinkedQueue<>(List.of(
                new StudentDto(idGenerator.incrementAndGet(), "Ivanov", "Ivan",
                        "i.ivanov@mail.ru", "+79998887766", "2000-01-19", 2),
                new StudentDto(idGenerator.incrementAndGet(), "Petrov", "Petr",
                        "p.petrov@mail.ru", "+79998883322", "2001-03-01", 1),
                new StudentDto(idGenerator.incrementAndGet(), "Sidorov", "Serge",
                        "s.sidorov@mail.ru", "+79993331234", "2000-12-12", 1)));
        this.students.stream().forEach(student -> student.setGroup(groupController.get(student.getGroupId())));
    }

    @GetMapping
    public List<StudentDto> getMethodName() {
        log.debug("Get all students");
        return students.stream().toList();
    }

    @GetMapping("/{id}")
    public StudentDto get(@PathVariable int id) {
        log.debug("Get student wtih id {}", id);
        return students.stream()
                .filter(student -> student.getId() == id)
                .findAny()
                .orElseThrow(() -> new NotFoundException(StudentDto.class, id));
    }

    @PostMapping
    public StudentDto create(@RequestBody StudentDto newStudent) {
        log.debug("Create student wtih data {}", newStudent);
        newStudent.setId(idGenerator.incrementAndGet());
        newStudent.setGroup(groupController.get(newStudent.getGroupId()));
        students.add(newStudent);
        return newStudent;
    }

    @PutMapping("/{id}")
    public StudentDto edit(@PathVariable int id, @RequestBody StudentDto newStudent) {
        log.debug("Edit student wtih id {} and data {}", id, newStudent);
        final StudentDto existsStudent = get(id);
        existsStudent.setLastName(newStudent.getLastName());
        existsStudent.setFirstName(newStudent.getFirstName());
        existsStudent.setEmail(newStudent.getEmail());
        existsStudent.setPhone(newStudent.getPhone());
        existsStudent.setBdate(newStudent.getBdate());
        existsStudent.setGroupId(newStudent.getGroupId());
        existsStudent.setGroup(groupController.get(existsStudent.getGroupId()));
        existsStudent.setImage(newStudent.getImage());
        return existsStudent;
    }

    @DeleteMapping("/{id}")
    public StudentDto delete(@PathVariable int id) {
        log.debug("Delete student wtih id {}", id);
        final StudentDto student = get(id);
        students.remove(student);
        return student;
    }
}
