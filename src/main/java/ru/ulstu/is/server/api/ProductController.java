package ru.ulstu.is.server.api;

import ru.ulstu.is.server.api.ProductDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.*;
import java.util.concurrent.ConcurrentHashMap;

@RestController
@RequestMapping("/api")
public class ProductController {

    private final Map<Long, ProductDTO> products = new ConcurrentHashMap<>();
    private Long nextId = 1L;

    public ProductController() {
        saveProduct(new ProductDTO(null, "Ноутбук Dell XPS", 125000.0, "15.6\"", 1L, 1L));
        saveProduct(new ProductDTO(null, "Мышь Logitech MX", 8500.0, "Standard", 2L, 2L));
        saveProduct(new ProductDTO(null, "Клавиатура Keychron", 12000.0, "Full-size", 2L, 3L));
    }

    @GetMapping("/products")
    public List<ProductDTO> getAllProducts() {
        return new ArrayList<>(products.values());
    }

    @GetMapping("/products/{id}")
    public ResponseEntity<ProductDTO> getProduct(@PathVariable Long id) {
        ProductDTO product = products.get(id);
        return product != null ? ResponseEntity.ok(product) : ResponseEntity.notFound().build();
    }

    @PostMapping("/products")
    public ProductDTO createProduct(@RequestBody ProductDTO productDTO) {
        return saveProduct(productDTO);
    }

    @PutMapping("/products/{id}")
    public ResponseEntity<ProductDTO> updateProduct(@PathVariable Long id, @RequestBody ProductDTO productDTO) {
        if (!products.containsKey(id)) {
            return ResponseEntity.notFound().build();
        }
        productDTO.setId(id);
        products.put(id, productDTO);
        return ResponseEntity.ok(productDTO);
    }

    @DeleteMapping("/products/{id}")
    public ResponseEntity<Void> deleteProduct(@PathVariable Long id) {
        return products.remove(id) != null ? ResponseEntity.ok().build() : ResponseEntity.notFound().build();
    }

    private ProductDTO saveProduct(ProductDTO productDTO) {
        if (productDTO.getId() == null) {
            productDTO.setId(nextId++);
        }
        products.put(productDTO.getId(), productDTO);
        return productDTO;
    }
}