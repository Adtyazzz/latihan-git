SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`Kota`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Kota` (
  `idkota` INT NOT NULL,
  `namakota` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idkota`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Penjual`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Penjual` (
  `Idpenjual` INT NOT NULL,
  `nama` VARCHAR(50) NOT NULL,
  `alamat` TEXT NULL,
  `Kota_idkota` INT NOT NULL,
  PRIMARY KEY (`Idpenjual`),
  INDEX `fk_Penjual_Kota_idx` (`Kota_idkota` ASC) VISIBLE,
  CONSTRAINT `fk_Penjual_Kota`
    FOREIGN KEY (`Kota_idkota`)
    REFERENCES `mydb`.`Kota` (`idkota`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;



