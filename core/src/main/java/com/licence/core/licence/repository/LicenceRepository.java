package com.licence.core.licence.repository;

import com.licence.core.licence.model.Licence;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LicenceRepository extends JpaRepository<Licence, Long> {

   Licence findByChaveDeAcesso(String uuid);
}
