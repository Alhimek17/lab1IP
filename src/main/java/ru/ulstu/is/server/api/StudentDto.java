package ru.ulstu.is.server.api;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

public class StudentDto {
    @JsonProperty(access = Access.READ_ONLY)
    private int id;
    @JsonProperty("last_name")
    private String lastName;
    @JsonProperty("first_name")
    private String firstName;
    private String email;
    private String phone;
    private String bdate;
    private int groupId;
    @JsonProperty(access = Access.READ_ONLY)
    private GroupDto group;
    private String image;

    public StudentDto() {
    }

    public StudentDto(
            int id,
            String lastName,
            String firstName,
            String email,
            String phone,
            String bdate,
            int groupId) {
        this.id = id;
        this.lastName = lastName;
        this.firstName = firstName;
        this.email = email;
        this.phone = phone;
        this.bdate = bdate;
        this.groupId = groupId;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getBdate() {
        return bdate;
    }

    public void setBdate(String bdate) {
        this.bdate = bdate;
    }

    public int getGroupId() {
        return groupId;
    }

    public void setGroupId(int groupId) {
        this.groupId = groupId;
    }

    public GroupDto getGroup() {
        return group;
    }

    public void setGroup(GroupDto newGroup) {
        group = newGroup;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    @Override
    public String toString() {
        return "StudentDto [lastName=" + lastName + ", firstName=" + firstName + ", email=" +
                email + ", phone=" + phone + ", bdate=" + bdate + ", groupId=" + groupId + ", image=" + image + "]";
    }

}
