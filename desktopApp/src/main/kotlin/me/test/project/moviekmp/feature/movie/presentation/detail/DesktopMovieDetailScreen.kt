package me.test.project.moviekmp.feature.movie.presentation.detail

import androidx.compose.foundation.layout.*
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.text.selection.SelectionContainer
import androidx.compose.foundation.verticalScroll
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.input.key.*
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.lifecycle.compose.collectAsStateWithLifecycle
import coil3.compose.AsyncImage
import org.koin.compose.viewmodel.koinViewModel
import org.koin.core.parameter.parametersOf

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun DesktopMovieDetailScreen(
    imdbId: String,
    onBack: () -> Unit,
    viewModel: DesktopMovieDetailViewModel = koinViewModel(key = imdbId) { parametersOf(imdbId) }
) {
    LaunchedEffect(imdbId) {
        viewModel.loadDetail(imdbId)
    }

    val state by viewModel.state.collectAsStateWithLifecycle()

    Scaffold(
        topBar = {
            TopAppBar(
                title = { Text(state.movie?.title ?: "Detail Film") },
                navigationIcon = {
                    TextButton(onClick = onBack) {
                        Text("← Kembali")
                    }
                }
            )
        },
        modifier = Modifier.onPreviewKeyEvent { event ->
            if (event.key == Key.Escape && event.type == KeyEventType.KeyUp) {
                onBack()
                true
            } else false
        }
    ) { paddingValues ->
        Box(
            modifier = Modifier
                .fillMaxSize()
                .padding(paddingValues)
        ) {
            when {
                state.isLoading -> {
                    CircularProgressIndicator(modifier = Modifier.align(Alignment.Center))
                }
                state.error != null -> {
                    Column(
                        modifier = Modifier.align(Alignment.Center),
                        horizontalAlignment = Alignment.CenterHorizontally
                    ) {
                        Text(state.error!!, color = MaterialTheme.colorScheme.error)
                        Spacer(modifier = Modifier.height(8.dp))
                        Button(onClick = { viewModel.loadDetail(imdbId) }) {
                            Text("Coba Lagi")
                        }
                    }
                }
                state.movie != null -> {
                    val movie = state.movie!!
                    SelectionContainer {
                        Row(
                            modifier = Modifier
                                .fillMaxSize()
                                .verticalScroll(rememberScrollState())
                                .padding(24.dp),
                            horizontalArrangement = Arrangement.spacedBy(24.dp)
                        ) {
                            if (movie.poster.isNotBlank()) {
                                AsyncImage(
                                    model = movie.poster,
                                    contentDescription = movie.title,
                                    modifier = Modifier
                                        .width(300.dp)
                                        .height(440.dp)
                                        .clip(RoundedCornerShape(12.dp)),
                                    contentScale = ContentScale.Crop
                                )
                            }
                            Column(modifier = Modifier.weight(1f)) {
                                Text(
                                    text = movie.title,
                                    style = MaterialTheme.typography.headlineLarge,
                                    fontWeight = FontWeight.Bold
                                )
                                Spacer(modifier = Modifier.height(8.dp))

                                Text(
                                    text = "★ ${movie.imdbRating} | ${movie.runtime} | ${movie.rated} | ${movie.year}",
                                    style = MaterialTheme.typography.titleMedium,
                                    color = MaterialTheme.colorScheme.primary
                                )
                                Spacer(modifier = Modifier.height(8.dp))

                                Text(
                                    text = "Genre: ${movie.genre}",
                                    style = MaterialTheme.typography.bodyLarge,
                                    fontWeight = FontWeight.Medium
                                )
                                Spacer(modifier = Modifier.height(16.dp))

                                Text(
                                    text = "Sinopsis",
                                    style = MaterialTheme.typography.titleLarge,
                                    fontWeight = FontWeight.Bold
                                )
                                Spacer(modifier = Modifier.height(4.dp))
                                Text(
                                    text = movie.plot,
                                    style = MaterialTheme.typography.bodyLarge
                                )
                                Spacer(modifier = Modifier.height(16.dp))

                                Text(text = "Sutradara: ${movie.director}", style = MaterialTheme.typography.bodyMedium)
                                Text(text = "Penulis: ${movie.writer}", style = MaterialTheme.typography.bodyMedium)
                                Text(text = "Pemeran: ${movie.actors}", style = MaterialTheme.typography.bodyMedium)
                            }
                        }
                    }
                }
            }
        }
    }
}
