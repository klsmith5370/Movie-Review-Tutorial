package movie.reviews.movies;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public User createUser(String username, String email) {
        User user = new User(username, email);
        return userRepository.save(user);
    }
}
