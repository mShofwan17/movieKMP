# Rencana Refactoring Modul KMPChat

Dokumen ini berisi rencana komprehensif untuk merestrukturisasi nama modul pada proyek Multiplatform Kotlin (KMPChat):
- Renaming modul `:sharedLogic` menjadi `:shared`
- Renaming modul `:sharedUI` menjadi `:composeUI`

---

## 1. Perubahan Direktori Utama
Akan dilakukan pemindahan/renaming folder fisik modul:
1. `sharedLogic/` ➔ `shared/`
2. `sharedUI/` ➔ `composeUI/`

---

## 2. Pengaturan Root Project (`settings.gradle.kts`)
Memperbarui deklarasi modul yang di-include:
```kotlin
// Sebelum:
include(":sharedLogic")
include(":sharedUI")

// Sesudah:
include(":shared")
include(":composeUI")
```

---

## 3. Modul Core (`shared` & `composeUI`)

### A. Modul `:shared` (sebelumnya `sharedLogic`)
File: `shared/build.gradle.kts`
- **Framework iOS**: `baseName = "SharedLogic"` ➔ `baseName = "Shared"`
- **JS Output**: `outputModuleName = "sharedLogic"` ➔ `outputModuleName = "shared"`
- **Android Namespace**: `namespace = "me.poc.kmpchat.sharedLogic"` ➔ `namespace = "me.poc.kmpchat.shared"`

### B. Modul `:composeUI` (sebelumnya `sharedUI`)
File: `composeUI/build.gradle.kts`
- **Android Namespace**: `namespace = "me.poc.kmpchat.sharedUI"` ➔ `namespace = "me.poc.kmpchat.composeUI"`
- **Ketergantungan Modul**:
  ```kotlin
  // Sebelum:
  api(project(":sharedLogic"))
  
  // Sesudah:
  api(project(":shared"))
  ```
- **Compose Generated Resources** (`composeUI/src/commonMain/kotlin/me/poc/kmpchat/App.kt`):
  ```kotlin
  // Sebelum:
  import kmpchat.sharedui.generated.resources.Res
  import kmpchat.sharedui.generated.resources.compose_multiplatform

  // Sesudah:
  import kmpchat.composeui.generated.resources.Res
  import kmpchat.composeui.generated.resources.compose_multiplatform
  ```

---

## 4. Rencana Per Platform

### A. Android Platform (`androidApp`)
File: `androidApp/build.gradle.kts`
- Memperbarui dependensi modul UI:
  ```kotlin
  // Sebelum:
  implementation(project(":sharedUI"))

  // Sesudah:
  implementation(project(":composeUI"))
  ```

### B. Desktop Platform (`desktopApp`)
File: `desktopApp/build.gradle.kts`
- Memperbarui dependensi modul UI:
  ```kotlin
  // Sebelum:
  implementation(project(":sharedUI"))

  // Sesudah:
  implementation(project(":composeUI"))
  ```

### C. iOS Platform (`iosApp`)
1. **Xcode Build Script** (`iosApp/iosApp.xcodeproj/project.pbxproj`):
   - Mengubah nama task embed framework:
     ```sh
     # Sebelum:
     ./gradlew :sharedLogic:embedAndSignAppleFrameworkForXcode

     # Sesudah:
     ./gradlew :shared:embedAndSignAppleFrameworkForXcode
     ```
2. **Kode Swift** (`iosApp/iosApp/ContentView.swift`):
   - Mengubah import framework:
     ```swift
     // Sebelum:
     import SharedLogic

     // Sesudah:
     import Shared
     ```

### D. Web Platform (`webApp`)
1. **Root `package.json`**:
   - Memperbarui path workspace npm dan script build:
     ```json
     "workspaces": [
       "webApp",
       "shared/build/dist/js/developmentLibrary"
     ],
     "scripts": {
       "build:shared": "./gradlew :shared:jsBrowserDevelopmentLibraryDistribution",
       ...
     }
     ```
2. **`webApp/package.json`**:
   - Memperbarui nama package dependensi:
     ```json
     "dependencies": {
       ...
       "shared": "0.0.0-unspecified"
     }
     ```
3. **Komponen React** (`webApp/src/components/Greeting/Greeting.tsx`):
   - Memperbarui import module JS:
     ```typescript
     // Sebelum:
     import { Greeting as KotlinGreeting } from 'sharedLogic';

     // Sesudah:
     import { Greeting as KotlinGreeting } from 'shared';
     ```
4. **IDE Run Configuration** (`.run/webApp.run.xml`):
   - Memperbarui path task Gradle:
     ```xml
     <option name="Gradle.BeforeRunTask" enabled="true" tasks="jsBrowserDevelopmentLibraryDistribution" externalProjectPath="$PROJECT_DIR$/shared" vmOptions="" scriptParameters="" />
     ```

---

## 5. Dokumentasi Project
File: `README.md`
- Mengganti seluruh referensi jalur `./sharedLogic` menjadi `./shared`
- Mengganti seluruh referensi jalur `./sharedUI` menjadi `./composeUI`

---

## 6. Rencana Verifikasi
1. **Gradle Sync**: Menjalankan Gradle Sync untuk memastikan resolusi modul `:shared` dan `:composeUI` sukses.
2. **Android & Desktop Build**: Memastikan `:androidApp` dan `:desktopApp` dapat di-build dengan modul `:composeUI`.
3. **iOS Build**: Memastikan framework `:shared` ter-embed dengan benar di Xcode project dan Swift dapat mengimpor `Shared`.
4. **Web Build**: Memastikan `npm run build` memicu `:shared:jsBrowserDevelopmentLibraryDistribution` dan aplikasi Web React mengimpor `shared`.
