package movie.reviews.movies;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document (collection = "users")

public class User {
    @Id
    private String id;
    private String username;
    private String email;
    private String firstName;
    private String lastName;

    public User() {}

    public User(String username, String email) {
        this.username = username;
        this.email = email;
        
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }


}
