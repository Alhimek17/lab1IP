package ru.ulstu.is.server.api;

import ru.ulstu.is.server.api.SupplierDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.*;
import java.util.concurrent.ConcurrentHashMap;

@RestController
@RequestMapping("/api")
public class SupplierController {

    private final Map<Long, SupplierDTO> suppliers = new ConcurrentHashMap<>();
    private Long nextId = 1L;

    public SupplierController() {
        saveSupplier(new SupplierDTO(null, "Dell Technologies"));
        saveSupplier(new SupplierDTO(null, "Logitech International"));
        saveSupplier(new SupplierDTO(null, "Keychron"));
    }

    @GetMapping("/suppliers")
    public List<SupplierDTO> getAllSuppliers() {
        return new ArrayList<>(suppliers.values());
    }

    @GetMapping("/suppliers/{id}")
    public ResponseEntity<SupplierDTO> getSupplier(@PathVariable Long id) {
        SupplierDTO supplier = suppliers.get(id);
        return supplier != null ? ResponseEntity.ok(supplier) : ResponseEntity.notFound().build();
    }

    @PostMapping("/suppliers")
    public SupplierDTO createSupplier(@RequestBody SupplierDTO supplierDTO) {
        return saveSupplier(supplierDTO);
    }

    @PutMapping("/suppliers/{id}")
    public ResponseEntity<SupplierDTO> updateSupplier(@PathVariable Long id, @RequestBody SupplierDTO supplierDTO) {
        if (!suppliers.containsKey(id)) {
            return ResponseEntity.notFound().build();
        }
        supplierDTO.setId(id);
        suppliers.put(id, supplierDTO);
        return ResponseEntity.ok(supplierDTO);
    }

    @DeleteMapping("/suppliers/{id}")
    public ResponseEntity<Void> deleteSupplier(@PathVariable Long id) {
        return suppliers.remove(id) != null ? ResponseEntity.ok().build() : ResponseEntity.notFound().build();
    }

    private SupplierDTO saveSupplier(SupplierDTO supplierDTO) {
        if (supplierDTO.getId() == null) {
            supplierDTO.setId(nextId++);
        }
        suppliers.put(supplierDTO.getId(), supplierDTO);
        return supplierDTO;
    }
}