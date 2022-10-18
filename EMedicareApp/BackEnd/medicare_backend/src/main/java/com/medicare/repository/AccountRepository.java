package com.medicare.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.medicare.bean.Account;



@Repository
public interface AccountRepository extends JpaRepository<Account,String> {
      boolean existsByEmailAndPassword(String email,String Password);
      
}




