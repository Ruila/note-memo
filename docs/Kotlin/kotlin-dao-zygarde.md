---
title: "[Kotlin] DAO & Zygarde"
---

# [Kotlin] DAO & Zygarde

## What is Dao ?

**DAO (Data Access Object Pattern)** pattern is used to separate low level data accessing API or operations from high level business services. Following are the participants in Data Access Object Pattern.

+ **Data Access Object Interface** - This interface defines the standard operations to be performed on a model object(s).

+ **Data Access Object concrete class** - This class implements above interface. This class is responsible to get data from a data source which can be database / xml or any other storage mechanism.

+ **Model Object or Value Object** - This object is simple POJO containing get/set methods to store data retrieved using DAO class. Ex: `Entity` is a kind of Value Object.

:::info
If you want to know more detail about the relation between DAO and Entity, please read this [example](https://www.tutorialspoint.com/design_pattern/data_access_object_pattern.htm)
:::

## What is Zygarde ?

[Zygarde](https://github.com/zygarde-projects/zygarde) is an open soure. One of modules called `zygarde-jpa-codegen` can automatically generating **DAO** based on **JPA**

### Usage

#### step 1: Install

```
repositories {
  maven("https://nexus.puni.tw/repository/maven-releases/")
}

dependencies {
  implementation("zygarde:zygarde-jpa:$zygardeVersion")
  kapt("zygarde:zygarde-jpa-codegen:$zygardeVersion")
}
```

#### step 2: create your entity

```
import jakarta.persistence.*
import zygarde.codegen.ZyModel
import java.io.Serializable

@Table(schema = "public", name = "roles")
@ZyModel
@Entity
class Role(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    var id: Int? = null,

    @Column(nullable = false)
    val name: String,

    val description: String? = null,

    val available: Boolean? = null,

    @Column(name = "project_id")
    val projectId: Int? = null
) : Serializable
```

#### step 3: run command for generating DAO

```
./gradlew kaptKotlin
```

#### step 4: then you will see DAO

```
import kotlin.Int
import will.com.demo.entity.Role
import zygarde.`data`.jpa.dao.ZygardeEnhancedDao

public interface RoleDao : ZygardeEnhancedDao<Role, Int>
```

and use it like:

```
@RestController
@RequestMapping
class TestController(
    private val roleDao: RoleDao
) {
    @GetMapping("/data")
    fun getData(): String {
        val data = roleDao.searchOne { name() eq "root" }
        return data?.description ?: "empty"
    }

}
```

> Here is a minimal [demo](https://github.com/Ruila/zygarde-spring-boot-v3) for spring boot v3 and zygarde v3.
> If you want to use it and then meet some problem, you can leave your question on [issues](https://github.com/Ruila/zygarde-spring-boot-v3/issues).


## Reference

+ @[tutorialspoint](https://www.tutorialspoint.com/design_pattern/data_access_object_pattern.htm) - DAO
