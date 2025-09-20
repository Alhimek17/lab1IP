package ru.ulstu.is.server.api;

public class ProductDTO {
    private Long id;
    private String name;
    private Double price;
    private String size;
    private Long categoryId;
    private Long supplierId;

    public ProductDTO() {
    }

    public ProductDTO(Long id, String name, Double price, String size, Long categoryId, Long supplierId) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.size = size;
        this.categoryId = categoryId;
        this.supplierId = supplierId;
    }

    // Геттеры и сеттеры
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public String getSize() {
        return size;
    }

    public void setSize(String size) {
        this.size = size;
    }

    public Long getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(Long categoryId) {
        this.categoryId = categoryId;
    }

    public Long getSupplierId() {
        return supplierId;
    }

    public void setSupplierId(Long supplierId) {
        this.supplierId = supplierId;
    }
}