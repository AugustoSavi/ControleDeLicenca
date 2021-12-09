package com.licence.core.licence.service;

import com.licence.core.licence.model.Licence;
import com.licence.core.licence.repository.LicenceRepository;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Objects;

@RestController
@AllArgsConstructor
@RequestMapping("licence")
public class LicenceService {

    LicenceRepository licenceRepository;

    @GetMapping
    public List<Licence> getAll() {
        return licenceRepository.findAll();
    }

    @GetMapping("/{id}")
    public Licence getById(@PathVariable Long id) {
        return licenceRepository.findById(id).orElse(null);
    }

    @GetMapping("/isActive/{id}")
    public Boolean isActive(@PathVariable String id) {
        return Objects.requireNonNull(licenceRepository.findByChaveDeAcesso(id)).isAtivo();
    }

    @PostMapping
    public Licence save(@RequestBody Licence licence) {
        return licenceRepository.save(licence);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        licenceRepository.deleteById(id);
    }

    @PutMapping("/{id}")
    public Licence update(@PathVariable Long id, @RequestBody Licence licence) {
        return licenceRepository.save(licence);
    }
}
