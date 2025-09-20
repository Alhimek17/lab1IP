package ru.ulstu.is.server.api;

import ru.ulstu.is.server.api.CategoryDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.*;
import java.util.concurrent.ConcurrentHashMap;

@RestController
@RequestMapping("/api")
public class CategoryController {

    private final Map<Long, CategoryDTO> categories = new ConcurrentHashMap<>();
    private Long nextId = 1L;

    public CategoryController() {
        saveCategory(new CategoryDTO(null, "Ноутбуки и компьютеры"));
        saveCategory(new CategoryDTO(null, "Периферийные устройства"));
        saveCategory(new CategoryDTO(null, "Комплектующие"));
    }

    @GetMapping("/categories")
    public List<CategoryDTO> getAllCategories() {
        return new ArrayList<>(categories.values());
    }

    @GetMapping("/categories/{id}")
    public ResponseEntity<CategoryDTO> getCategory(@PathVariable Long id) {
        CategoryDTO category = categories.get(id);
        return category != null ? ResponseEntity.ok(category) : ResponseEntity.notFound().build();
    }

    @PostMapping("/categories")
    public CategoryDTO createCategory(@RequestBody CategoryDTO categoryDTO) {
        return saveCategory(categoryDTO);
    }

    @PutMapping("/categories/{id}")
    public ResponseEntity<CategoryDTO> updateCategory(@PathVariable Long id, @RequestBody CategoryDTO categoryDTO) {
        if (!categories.containsKey(id)) {
            return ResponseEntity.notFound().build();
        }
        categoryDTO.setId(id);
        categories.put(id, categoryDTO);
        return ResponseEntity.ok(categoryDTO);
    }

    @DeleteMapping("/categories/{id}")
    public ResponseEntity<Void> deleteCategory(@PathVariable Long id) {
        return categories.remove(id) != null ? ResponseEntity.ok().build() : ResponseEntity.notFound().build();
    }

    private CategoryDTO saveCategory(CategoryDTO categoryDTO) {
        if (categoryDTO.getId() == null) {
            categoryDTO.setId(nextId++);
        }
        categories.put(categoryDTO.getId(), categoryDTO);
        return categoryDTO;
    }
}